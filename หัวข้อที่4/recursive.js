// Recursive function to calculate factorial with memoization
function factorial(n, memo = {}) {
    if (n === 0) {
        return 1;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = n * factorial(n - 1, memo);
    return memo[n];
}

// Recursive function to generate Fibonacci sequence with memoization
function fibonacci(n, memo = {}) {
    if (n <= 1) {
        return n;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
