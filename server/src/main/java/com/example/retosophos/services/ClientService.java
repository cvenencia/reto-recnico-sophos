package com.example.retosophos.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.retosophos.models.ClientModel;
import com.example.retosophos.repositories.ClientRepository;
import com.example.retosophos.repositories.ClientRepository.ClientBalance;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;

    public ClientModel getClientById(Long id) {
        return clientRepository.findById(id).orElse(null);
    }

    public Collection<ClientBalance> getBalance(Long id) {
        return clientRepository.getBalance(id);
    }
}