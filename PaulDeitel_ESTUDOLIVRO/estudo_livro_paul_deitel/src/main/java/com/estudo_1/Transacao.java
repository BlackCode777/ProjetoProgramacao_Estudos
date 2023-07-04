package com.estudo_1;

public class Transacao {

    public static void main(String[] args) {
        double principal = 1000.0;
        double taxa = 0.05;

        System.out.printf("%s%20s%n", "Year", "Amount on deposit");

        // Calculando o montante para cada um dos dez anos
        for (int year = 1; year <= 10; year++) {
            // Calculando a quantia para o ano especificado
            double amount = principal * Math.pow(1.0 + taxa, year);

            // Exibindo o ano e o montante
            System.out.printf("%4d%,20.2f%n", year, amount);

        }

    }

}
