package com.usermanage.backend.service;

import com.usermanage.backend.model.User;
import com.usermanage.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service //Marks it as a service layer component.
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public User getUserById(Long id) {
    return userRepository.findById(id).orElse(null);
  }

  public User addUser(User user) {
    return userRepository.save(user);
  }

  public User updateUser(Long id, User userDetails) {
    User user = userRepository.findById(id).orElse(null);
    if (user != null) {
      user.setName(userDetails.getName());
      user.setEmail(userDetails.getEmail());
      user.setPhone(userDetails.getPhone());
      return userRepository.save(user);
    }
    return null;
  }

  public void deleteUser(Long id) {
    userRepository.deleteById(id);
  }
}
