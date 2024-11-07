package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    
    @GetMapping("/")
    public String home() {
        return "index.html"; // Adicione a extensão .html
    }
    @GetMapping("/eventos")
    public String eventos() {
        return "eventos.html"; // Adicione a extensão .html
    }

    @GetMapping("/cadastro")
    public String cadastro() {
        return "cadastro.html"; // Adicione a extensão .html
    }
    @GetMapping("/login")
    public String login() {
        return "login.html"; // Adicione a extensão .html
    }
}
