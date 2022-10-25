package com.example.retosophos.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.retosophos.repositories.ClientRepository;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;

}