package com.food.uploads;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;


@Entity
@Table(name = "files")
public class FileDB {
  @Id
  private String id;

  private String name;

  private String type;

  @Lob
  private byte[] data;

  public FileDB() {
  }

public FileDB(String id, String name, String type, byte[] data) {
	super();
	this.id = id;
	this.name = name;
	this.type = type;
	this.data = data;
}

public String getId() {
	return id;
}

public String getName() {
	return name;
}

public String getType() {
	return type;
}

public byte[] getData() {
	return data;
}

public void setId(String id) {
	this.id = id;
}

public void setName(String name) {
	this.name = name;
}

public void setType(String type) {
	this.type = type;
}

public void setData(byte[] data) {
	this.data = data;
}

  

}
