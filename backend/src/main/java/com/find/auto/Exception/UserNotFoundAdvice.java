package com.find.auto.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    Map<String,String> exceptionHandler(UserNotFoundException e){
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("Error Message: ",e.getMessage());
        return errorMap;
    }
}