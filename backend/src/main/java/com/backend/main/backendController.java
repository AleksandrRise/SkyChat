package com.backend.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class backendController {
    @GetMapping
    public String getText() {
        return "Hello World!";
    }
}
