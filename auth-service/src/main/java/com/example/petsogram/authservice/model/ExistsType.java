package com.example.petsogram.authservice.model;

import lombok.Getter;

@Getter
public enum ExistsType {
    PHONE("phone"),
    USERNAME("username");

    private final String value;

    ExistsType(String value) {
        this.value = value;
    }

    public static ExistsType fromValue(String value) {
        for (ExistsType type : ExistsType.values()) {
            if (type.value.equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Invalid ExistsType: " + value);
    }
}
