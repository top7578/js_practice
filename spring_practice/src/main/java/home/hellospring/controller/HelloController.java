package home.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("hello")    // url로 hello 받으면
    public String hello(Model model) {
        model.addAttribute("data", "hello!!");  // data:hello
        return "hello";     // resources/templates/hello.html
    }
}
