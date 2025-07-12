import java.util.Scanner;

public class Ex1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("nhap so nguyen: ");
        int n = scanner.nextInt();
        if (n == 0) {
            System.out.println("so khong");
        } else if (n % 2 == 0) {
            System.out.printf("Số %d là số chẵn", n);
        } else {
            System.out.printf("Số %d là số lẻ", n);
        }

        scanner.close();
    }
}
