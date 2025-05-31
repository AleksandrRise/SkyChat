package com.backend.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class backendController {

    @PostMapping("/greeting")
    public String sendText(@RequestBody String word) {
        System.out.println(word);
        return word;
    }

    @GetMapping("/greeting")
    public String getText() {
        return "Hello!";
    }

}
