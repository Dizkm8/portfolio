const smoothScrollToTarget = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
        history.pushState(null, '', `#${targetId}`);
    }
};

export default smoothScrollToTarget;
