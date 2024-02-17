package com.mywebsite.sample.controller;

import com.mywebsite.sample.entity.BlogEntity;
import com.mywebsite.sample.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/blogs")
@CrossOrigin("*")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    @GetMapping
    public Page<BlogEntity> getAll(@RequestParam int pageNumber,int pageSize) {
        List<BlogEntity> blogEntities = new ArrayList<>();
        Pageable pageable = Pageable.ofSize(pageSize).withPage(pageNumber);
        return blogRepository.findAll(pageable);
    }

    @GetMapping("{id}")
    public BlogEntity getBlog(@PathVariable String id) {
        return blogRepository.findById(id).get();
    }

    @PostMapping
    public void createBLog(@RequestBody BlogEntity blogEntity) {
        blogRepository.save(blogEntity);
    }

    @DeleteMapping("{id}")
    public void deleteBlog(@PathVariable String id) {
        blogRepository.deleteById(id);
    }
}
