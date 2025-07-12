import java.util.Scanner;

public class Exer3 {
  public static void main(String[] args) {
    double radius;
    double area;
    // nhap du lieu
    Scanner scanner = new Scanner(System.in);
    System.out.print("nhap ban kinh");
    radius = scanner.nextDouble();
    // dien tich
    area = Math.PI * Math.pow(radius, 2);
    System.out.printf("dien tich duong tron co ban kinh %.2f la %.2f", radius, area);
  }
}
