package com.backend.main.model;

public class Message {

    private String senderName;
    private String receiverName;
    private String message;
    private String data;
    private Status status;

    public Message() {

    }

    public Message(String senderName, String receiverName, String message, String data, Status status) {
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.message = message;
        this.data = data;
        this.status = status;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
