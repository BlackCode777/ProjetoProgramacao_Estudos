package com.estudo_1;

public class Account {

    private String name;
    private double balance;

    public Account(String name, double balance) {
        this.name = name;
        // validate that the balance is greater than 0.0; if it's not,
        // instance variable balance keeps its default initial value of 0.0
        if (balance > 0.0) {
            this.balance = balance;
        }
    }

    // Método para definir o nome no objeto
    public void deposit(double depositAmount) {
        // Valida se depositAmount é maior que 0.0
        if (depositAmount > 0.0) {
            // Se for, adiciona ao saldo
            balance = balance + depositAmount;
        }
    }

    // Método para definir o nome no objeto
    public double getBalance() {
        return balance;
    }

    // Método para retornar o nome do objeto
    public String getName() {
        return name;
    }

    // Método para definir o nome no objeto
    public void setName(String name) {
        this.name = name;
    }

}
