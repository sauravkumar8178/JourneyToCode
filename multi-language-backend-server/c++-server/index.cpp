#include <iostream>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
#include <cstring>

int main() {
    // Create a socket
    int serverSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (serverSocket == -1) {
        std::cerr << "Error creating socket\n";
        return 1;
    }

    // Bind the socket to an IP address and port
    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = INADDR_ANY; // Use any available IP address
    serverAddr.sin_port = htons(8080); // Use port 8080

    if (bind(serverSocket, (sockaddr*)&serverAddr, sizeof(serverAddr)) == -1) {
        std::cerr << "Error binding socket\n";
        return 1;
    }

    // Listen for incoming connections
    if (listen(serverSocket, 5) == -1) {
        std::cerr << "Error listening on socket\n";
        return 1;
    }

    std::cout << "Server started on port 8080\n";

    // Accept incoming connections
    sockaddr_in clientAddr;
    socklen_t clientAddrSize = sizeof(clientAddr);
    int clientSocket = accept(serverSocket, (sockaddr*)&clientAddr, &clientAddrSize);
    if (clientSocket == -1) {
        std::cerr << "Error accepting connection\n";
        return 1;
    }

    // Send a message to the client
    const char* message = "Hello, you've connected to the server!";
    if (send(clientSocket, message, strlen(message), 0) == -1) {
        std::cerr << "Error sending message to client\n";
    }

    // Close the client socket
    close(clientSocket);

    // Close the server socket
    close(serverSocket);

    return 0;
}
