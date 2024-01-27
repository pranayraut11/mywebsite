package com.mywebsite.sample.entity;

import jakarta.persistence.*;

@Entity
@Table(name="Blog")
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

    public String getBlogSummary() {
        return blogSummary;
    }

    public void setBlogSummary(String blogSummery) {
        this.blogSummary = blogSummery;
    }

    public String getBlogName() {
        return blogName;
    }

    public void setBlogName(String blogName) {
        this.blogName = blogName;
    }

    public String getBlogAuthor() {
        return blogAuthor;
    }

    public void setBlogAuthor(String blogAuthor) {
        this.blogAuthor = blogAuthor;
    }

    public String getBlogImage() {
        return blogImage;
    }

    public void setBlogImage(String blogImage) {
        this.blogImage = blogImage;
    }

    public String getBlogData() {
        return blogData;
    }

    public void setBlogData(String blogData) {
        this.blogData = blogData;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
    }
}
