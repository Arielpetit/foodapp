Account Creating
```mermaid
sequenceDiagram
    participant Customer
    participant AccountManagementService
    participant IdentityManagementService
    participant DataStore

    Customer->>AccountManagementService: Create account
    AccountManagementService->>AccountManagementService: Collect customer information
    AccountManagementService->>IdentityManagementService: Verify identity
    IdentityManagementService->>IdentityManagementService: Verify documents/biometrics
    IdentityManagementService->>AccountManagementService: UserID
    AccountManagementService->>DataStore: Create account using UserID
    AccountManagementService->>DataStore: Update balance
    AccountManagementService->>Customer: Return account information
```

Account balance check
```mermaid
sequenceDiagram
    participant Customer
    participant SecurityService
    participant AccountManagementService
    participant TransactionProcessingService
    participant BalanceCalculationService
    participant DataStore

 
    Customer->>AccountManagementService: Check balance
    AccountManagementService->>SecurityService: Authenticate customer
    SecurityService->>AccountManagementService: Authenticated
    AccountManagementService->>DataStore: Retrieve account information
    DataStore->>AccountManagementService: Account information
    AccountManagementService->>BalanceCalculationService: Calculate balance
    BalanceCalculationService->>DataStore: Retrieve transaction history
    DataStore->>BalanceCalculationService: Transaction history
    BalanceCalculationService->>AccountManagementService: Calculated balance
    AccountManagementService->>Customer: Return balance
```

Account crediting

```mermaid
sequenceDiagram
    participant Customer
    participant SecurityService
    participant AccountManagementService
    participant TransactionProcessingService
    participant DataStore

    Customer->SecurityService: Authenticate
    SecurityService->SecurityService: Verify credentials
    SecurityService->Customer: Grant access (if successful)
    Customer->AccountManagementService: Credit account
    AccountManagementService->AccountManagementService: Validate account
    AccountManagementService->DataStore: Retrieve account information
    TransactionProcessingService->AccountManagementService: Process credit
    AccountManagementService->DataStore: Update balance and transaction history
    AccountManagementService->Customer: Return updated balance
```


Account tranfer

```mermaid
sequenceDiagram
    participant Customer
    participant AuthenticationService
    participant AccountManagementService
    participant TransactionProcessingService
    participant DataStore

    Customer->AuthenticationService: Authenticate
    AuthenticationService->AuthenticationService: Verify credentials
    AuthenticationService->Customer: Grant access (if successful)
    Customer->AccountManagementService: Transfer funds
    AccountManagementService->AccountManagementService: Validate accounts
    TransactionProcessingService->AccountManagementService: Verify funds
    TransactionProcessingService->AccountManagementService: Debit source account
    TransactionProcessingService->AccountManagementService: Credit destination account
    DataStore->AccountManagementService: Update balances and transaction history
    AccountManagementService->Customer: Return transaction result