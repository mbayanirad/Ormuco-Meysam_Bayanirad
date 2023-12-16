function compareVersions(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    
    const maxLength = Math.max(v1.length, v2.length);
    
    for (let i = 0; i < maxLength; i++) {
        const num1 = parseInt(v1[i] || 0);
        const num2 = parseInt(v2[i] || 0);
        
        if (num1 > num2) {
            return 1; // version1 is greater than version2
        } else if (num1 < num2) {
            return -1; // version1 is less than version2
        }
    }
    
    return 0; // versions are equal
}

// Test cases
console.log(compareVersions("1.2", "1.1")); // Output: 1 (1.2 is greater than 1.1)
console.log(compareVersions("1.1", "1.2")); // Output: -1 (1.1 is less than 1.2)
console.log(compareVersions("1.2", "1.2")); // Output: 0 (1.2 is equal to 1.2)
console.log(compareVersions("1.2.3", "1.2")); // Output: 1 (1.2.3 is greater than 1.2)
console.log(compareVersions("1.10", "1.9")); // Output: 1 (1.10 is greater than 1.9)
console.log(compareVersions("2.0", "1.999")); // Output: 1 (2.0 is greater than 1.999)
