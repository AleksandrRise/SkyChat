package com.backend.main.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;

record GreetingRequest(String name){}
record GreetingResponse(String message){}

@Controller
public class MessageWebsocketController {

    @MessageMapping("/chat")
    @SendTo("topic/greetings")
    GreetingResponse greet(GreetingRequest request) throws Exception {
        Assert.isTrue(Character.isUpperCase( request.name().charAt(0)), () -> "the name must start with a capital letter!");
        Thread.sleep(1_000);
        return new GreetingResponse("Hello " + request.name());
    }

}
