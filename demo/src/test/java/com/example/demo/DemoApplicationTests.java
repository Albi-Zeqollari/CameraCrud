package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200") 
@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {
	}

}
