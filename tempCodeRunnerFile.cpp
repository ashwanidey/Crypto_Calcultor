#include <iostream>

class Parent {
protected:
    int num;

public:
    void setNum(int n) {
        num = n;
    }

    virtual void fun() {
        std::cout << "Error: Function not implemented in the base class." << std::endl;
    }
};

class Child : public Parent {
public:
    void fun() override {
        int tempNum = num;
        int sum = 0;

        int count = 0;  // To keep track of the number of digits

        // Calculate the sum of pairs of digits
        while (tempNum > 0) {
            int digit = tempNum % 10;
            tempNum /= 10;

            sum += (digit * count + digit * (count - 1));
            count++;
        }

        std::cout << sum << std::endl;
    }
};

int main() {
    int inputNum;
    std::cin >> inputNum;

    Child child;
    child.setNum(inputNum);
    child.fun();

    return 0;
}
