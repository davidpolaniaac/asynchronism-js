const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}


const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}


const anotherFunction = async () => {
    try {
        console.log('Before');
        const something = await doSomething();
        console.log('After');
    } catch (error) {
        console.error(error);
    }
}

anotherFunction();