# City / Country Weather Search Application

## Overview

This project is a cross-platform weather application consisting of a **web client** and a **mobile client**.  
It allows users to search for current weather information by city or country, view detailed conditions, and access their search history.

The application was built with a focus on:

- Clean and readable code
- Reusability across platforms
- Consistent data handling
- Maintainable architecture

---

## Supported Platforms

- Web (React)
- Mobile (React Native with Expo)

---

## Core Features

- Search weather by city or country
- Display current temperature, high and low temperatures
- Display humidity, date, and time
- Persistent search history
- Re-search or delete previous searches
- Light and dark theme support
- Shared API and data-formatting logic between web and mobile

---

## Technology Stack

### Web

- React
- Redux Toolkit
- JavaScript
- OpenWeather API

### Mobile

- React Native
- Expo
- TypeScript
- AsyncStorage

### Shared

- OpenWeather API
- Shared utility functions for data formatting

---

## Project Structure

# City / Country Weather Search Application

## Overview

This project is a cross-platform weather application consisting of a **web client** and a **mobile client**.  
It allows users to search for current weather information by city or country, view detailed conditions, and access their search history.

The application was built with a focus on:

- Clean and readable code
- Reusability across platforms
- Consistent data handling
- Maintainable architecture

---

## Supported Platforms

- Web (React)
- Mobile (React Native with Expo)

---

## Core Features

- Search weather by city or country
- Display current temperature, high and low temperatures
- Display humidity, date, and time
- Persistent search history
- Re-search or delete previous searches
- Light and dark theme support ( Web Only )
- Shared API and data-formatting logic between web and mobile

---

## Technology Stack

### Web

- React
- Redux Toolkit
- JavaScript
- OpenWeather API

### Mobile

- React Native
- Expo
- TypeScript
- AsyncStorage

### Shared

- OpenWeather API
- Shared utility functions for data formatting

---

## Project Structure

/web - React web application
/mobile - React Native (Expo) mobile application
/shared - Shared API and utility logic

### API Key Configuration

An OpenWeather API key is required.

Ensure the API key is configured correctly for both:

- Web environment
- Mobile (Expo) environment

---

### Running the Web Application

---bash
cd web
npm install
npm run dev

### Running the Web Application

---bash
cd mobile
npm install
npm run start
