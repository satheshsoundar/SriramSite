package com.satz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.satz.model.Item;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
