package com.mywebsite.sample.controller;

import com.mywebsite.sample.entity.BlogEntity;
import com.mywebsite.sample.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<BlogEntity> getAll(){
        List<BlogEntity> blogEntities = new ArrayList<>();
        blogRepository.findAll().forEach(blogEntities::add);
        return blogEntities;
    }

    @GetMapping("{id}")
    public BlogEntity generic(@PathVariable String id) {
       return blogRepository.findById(id).get();
    }

     @PostMapping()
    public void createBLog(@RequestBody BlogEntity blogEntity){
        blogRepository.save(blogEntity);
    }

    @DeleteMapping("{id}")
    public void deleteBlog(@PathVariable String id){
        blogRepository.deleteById(id);
    }
}
