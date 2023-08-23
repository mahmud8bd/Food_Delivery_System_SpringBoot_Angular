package com.food.uploads;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;



@Controller
@CrossOrigin("http://localhost:4200")
public class FileController {

  @Autowired
  private FileStorageService storageService;

  @PostMapping("/upload")
  public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file,
		  @RequestParam("id") String id) {
    String message = "";
    try {
      storageService.store(file, id);

      message = "Uploaded the file successfully: " + file.getOriginalFilename();
      return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
    } catch (Exception e) {
      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
    }
  }

  @GetMapping("/files")
  public ResponseEntity<List<ResponseFile>> getListFiles() {
    List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
      String fileDownloadUri = ServletUriComponentsBuilder
          .fromCurrentContextPath()
          .path("/files/")
          .path(dbFile.getId())
          .toUriString();

      return new ResponseFile(
          dbFile.getId(),
          fileDownloadUri,
          dbFile.getType(),
          dbFile.getData().length);
    }).collect(Collectors.toList());

    return ResponseEntity.status(HttpStatus.OK).body(files);
  }

  @GetMapping("/files/{id}")
  public ResponseEntity<byte[]> getFile(@PathVariable String id) {
    FileDB fileDB = storageService.getFile(id);

    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
        .body(fileDB.getData());
  }
  
  @GetMapping("/file/{fileId}")
  public ResponseEntity<String> getFileUrlById(@PathVariable String fileId) {
      FileDB dbFile = storageService.getFile(fileId);
      if (dbFile != null) {
          String fileDownloadUri = ServletUriComponentsBuilder
              .fromCurrentContextPath()
              .path("/files/")
              .path(dbFile.getId().toString())
              .toUriString();

          return ResponseEntity.status(HttpStatus.OK).body(fileDownloadUri);
      } else {
          return ResponseEntity.notFound().build();
      }
  }
  
  
  
  @DeleteMapping("/deletefile/{fileId}")
  public ResponseEntity<String> deleteFileById(@PathVariable String fileId) {
      try {
          // Call the fileService to delete the file by its ID
          boolean deleted = storageService.deleteFileById(fileId);

          if (deleted) {
              // If the file is successfully deleted, return a success response
              return ResponseEntity.ok("File with ID " + fileId + " has been deleted.");
          } else {
              // If the file with the given ID is not found, return a not found response
              return ResponseEntity.notFound().build();
          }
      } catch (Exception e) {
          // If there is an exception while deleting the file, return an error response
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting the file.");
      }
  }

}
