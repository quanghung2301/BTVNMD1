
import java.util.Scanner;

public class Ex2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhập một số nguyên từ 1 đến 7: ");
        int dayNumber = scanner.nextInt();
        switch (dayNumber) {
            case 1 -> System.out.println("Chủ nhật");
            case 2 -> System.out.println("Thứ hai");
            case 3 -> System.out.println("Thứ ba");
            case 4 -> System.out.println("Thứ tư");
            case 5 -> System.out.println("Thứ năm");
            case 6 -> System.out.println("Thứ sáu");
            case 7 -> System.out.println("Thứ bảy");
            default -> System.out.println("Số nhập vào không hợp lệ.");
        }

        scanner.close();
    }
}
