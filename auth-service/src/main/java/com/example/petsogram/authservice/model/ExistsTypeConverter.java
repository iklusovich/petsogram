package com.example.petsogram.authservice.model;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class ExistsTypeConverter implements Converter<String, ExistsType> {

    @Override
    public ExistsType convert(String source) {
        return ExistsType.fromValue(source);
    }
}
