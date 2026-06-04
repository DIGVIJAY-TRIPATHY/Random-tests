function findDuplicate(nums) {
    const seen = new Set();

    return nums.find(num => {
        if (seen.has(num)) return true;
        seen.add(num);
        return false;
    });
}

nums = [1,3,4,2,2]
console.log(findDuplicate(nums));
