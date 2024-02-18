package com.mywebsite.blog.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Blog")
@Data
public class BlogEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String blogName;

    private String blogAuthor;

    private String blogImage;

    @Lob
    private String blogData;

    private String blogSummary;

    private String publishedDate;
}
