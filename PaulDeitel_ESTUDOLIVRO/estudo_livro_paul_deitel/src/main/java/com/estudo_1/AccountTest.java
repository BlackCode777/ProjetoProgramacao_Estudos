
package main.java.com.estudo_1;

public class AccountTest {

    public static void main(String[] args) {
        // create two Account objects
        Account account1 = new Account("Anderson Silva", 50.00);
        Account account2 = new Account("Chris Weidman", -7.53);
        System.out.printf("intial account balance: $%.2f%n", account1.getBalance());
    }
}
