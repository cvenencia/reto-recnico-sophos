package com.example.retosophos.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.retosophos.models.ClientModel;

public interface ClientRepository extends CrudRepository<ClientModel, Long> {

}