function distanceBetweenCircles(a, b) {
    const dx = b.center.x - a.center.x;
    const dy = b.center.y - a.center.y;
    const centerDistance = Math.hypot(dx, dy);
    const edgeDistance = centerDistance - (a.radius + b.radius);
    return Math.max(0, edgeDistance);
}
