package com.usermanage.backend.repository;

import com.usermanage.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;//Provides built-in CRUD operations.

public interface UserRepository extends JpaRepository<User, Long> {}
