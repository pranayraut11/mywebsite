package com.mywebsite.sample.repository;

import com.mywebsite.sample.entity.BlogEntity;
import jdk.jfr.Registered;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

@Registered
public interface BlogRepository extends CrudRepository<BlogEntity,String> {
    Page<BlogEntity> findAll(Pageable pageable);
}
