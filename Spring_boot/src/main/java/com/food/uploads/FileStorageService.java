package com.food.uploads;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageService {

  @Autowired
  private FileDBRepository fileDBRepository;

  public FileDB store(MultipartFile file, String id) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    FileDB FileDB = new FileDB(id, fileName, file.getContentType(), file.getBytes());

    return fileDBRepository.save(FileDB);
  }

  public FileDB getFile(String id) {
    return fileDBRepository.findById(id).get();
  }
  
  public Stream<FileDB> getAllFiles() {
    return fileDBRepository.findAll().stream();
  }
  
  public boolean deleteFileById(String id) {
      // Check if the file with the given id exists
      if (fileDBRepository.existsById(id)) {
          // File exists, call the deleteById method to delete the file by its id
          fileDBRepository.deleteById(id);
          return true; // Deletion successful
      } else {
          // File with the given id does not exist
          return false; // Deletion failed
      }
  }
}

