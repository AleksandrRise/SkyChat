package com.backend.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class backendController {

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/greeting")
    public String sendText(@RequestBody String word) {
        System.out.println(word);
        return word;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/greeting")
    public String getText() {
        return "Hello!";
    }

}
