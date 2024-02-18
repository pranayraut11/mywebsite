package com.mywebsite.blog.repository;

import com.mywebsite.blog.entity.BlogEntity;
import jdk.jfr.Registered;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends CrudRepository<BlogEntity,String> {
    Page<BlogEntity> findAll(Pageable pageable);
}
