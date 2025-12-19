# Maxpine ERP

Maxpine ERP is a comprehensive Enterprise Resource Planning (ERP) application built with [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/). It is designed to manage various business processes including inventory, tasks, leads, and platform integrations across Android, iOS, and Web platforms.

## 🚀 Features

-   **Dashboard**: Centralized hub with quick access to recent activities and key metrics.
-   **Inventory Management**: View and manage inventory locations and detailed project inventories (`Inventories`, `InventoriesDetails`).
-   **Task Management**: unique `OpenTask` screen with tabbed views for All Tasks, Calls, Mails, and Meetings.
-   **Lead & Deal Management**: Dedicated sections for managing leads and deals.
-   **Platform Integration**: manage integrations with Ad Platforms, Calling Platforms, Website Integrations, and Webhooks.
-   **Unit Management**: Manage plot units (`PlotUnit`) and unit confirmations (`ConfirmUnit`).
-   **Site Visits**: Schedule and track site visits.
-   **User Management**: Authentication flows (Login, Register), Profile Settings, and Notification management.
-   **Responsive Design**: Built to work seamlessly on Mobile (Android/iOS) and Web.
-   **Theming**: Global color theme management for consistent UI.

## 🛠 Tech Stack

-   **Framework**: [React Native](https://reactnative.dev/) (v0.81.5)
-   **Platform**: [Expo](https://expo.dev/) (v54.0.29)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Navigation**: [React Navigation](https://reactnavigation.org/) (v7) & [Expo Router](https://docs.expo.dev/router/introduction)
-   **UI Library**: Custom components with global theming
-   **State Management**: React Hooks

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js (LTS version recommended)
-   npm or yarn
-   [Expo Go](https://expo.dev/client) app installed on your physical device (for testing on mobile) or an Android Emulator/iOS Simulator.

## 📦 Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd Maxpine_ERP
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## 🏃‍♂️ Running the App

To start the development server:

```bash
npx expo start
```

This will give you options to run the app:

-   **Press `a`** to open in Android Emulator.
-   **Press `i`** to open in iOS Simulator.
-   **Press `w`** to open in Web Browser.
-   **Scan the QR code** with the Expo Go app to run on your physical device.

### Other Scripts

-   `npm run android`: Run directly on Android.
-   `npm run ios`: Run directly on iOS.
-   `npm run web`: Run directly on Web.
-   `npm run build`: Export the app for web platform.

## 📂 Project Structure

```
Maxpine_ERP/
├── src/
│   ├── components/      # Reusable UI components
│   ├── constants/       # App constants including Theme configuration
│   ├── hooks/           # Custom React hooks
│   └── screens/         # Application screens (Dashboard, Login, etc.)
├── assets/              # Images, fonts, and other static assets
├── App.tsx              # Main application entry point
├── app.json             # Expo configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
