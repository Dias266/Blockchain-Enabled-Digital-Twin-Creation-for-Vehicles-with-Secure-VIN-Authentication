
Quick Start

1. **Install Dependencies**
You must install dependencies in three separate folders:

# Backend
```cd backend
npm install```
# IoT Telematics
```cd ../iot-telematics
npm install```

# Chaincode / Blockchain SDK
```cd ../chaincode
npm install```



2. **Configure Environment**
   - Update `.env` file with your  credentials
   - Ensure certificates are properly configured


3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Test API**
   ```bash
   curl http://localhost:3001/health
   

### Architecture

- **Blockchain**: Hyperledger Fabric 
- **Backend**: Node.js with Express
- **Deployment**: http://localhost:3001
- **Authentication**: X.509 certificates

### API Endpoints

- `GET /health` - System health check
- `GET /api/identity/list` - List all identities
- `POST /api/identity/register` - Register new identity
- `GET /api/identity/contract` - Contract information

### Development

- Node.js v22.18.0
- npm 10.9.3
- fabric-network@2.2.20
- Express.js 4.19.2

### Implementation Status


- [x] VIN-Based Digital Twins 
- [x] Secure VIN Authentication 

### Academic Requirements

**Prof. Omicini (Distributed Systems)**
- Byzantine fault tolerance
- Consensus mechanisms
- Distributed identity management

### Files Structure

```
distributed-systems-project/ 
├── backend    # Main server (vehicles only)
   └── app.js
   └── byzantine-handler.js    # Byzantine fault tolerance
   └── consensus protocol.js    # Raft consensus implementation
   └── failure-recovery.js     # Failure detection & recovery
   └── mqtt-integration.js
├── chaincode        
   └── fabric samples
   └── index.js 
   └── package-lock.json
   └── package.json
   └── vehicle-chaincode.js
├── fabric-network          
   └── configtx.yaml
   └── crypto-config.yaml
   └── docker-compose.yml
   └── network.sh
├── iot-telematics        
   └── arduino_auth_controller.ino
   └── congif.h
   └── control-unit-iot.js
   └── dashboard-iot.html
   └── esp32_telematics.ino
├── public              
   └── index.html
   └── style.css
├──test
   └── test-distributed-systems.js
├── README.md              
├── start-all.sh 
