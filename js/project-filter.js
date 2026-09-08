const filterButtons = document.querySelectorAll(".filtering button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        // Save current horizontal positions
        const oldPositions = new Map();

        projects.forEach(project => {
            if (!project.classList.contains("hide")) {
                oldPositions.set(
                    project,
                    project.getBoundingClientRect().left
                );
            }
        });

        // Fade out projects that won't be shown
        projects.forEach(project => {
            const show =
                filter === "*" ||
                project.matches(filter);

            if (!show) {
                project.classList.add("fade-out");
            }
        });

        setTimeout(() => {

            // Update which projects are actually in the row
            projects.forEach(project => {
                const show =
                    filter === "*" ||
                    project.matches(filter);

                project.classList.toggle("hide", !show);
            });

            const visibleProjects = [...projects].filter(
                project => !project.classList.contains("hide")
            );

            // Animate projects from old position → new position
            visibleProjects.forEach((project, index) => {

                const newLeft =
                    project.getBoundingClientRect().left;

                const oldLeft =
                    oldPositions.get(project);

                // Existing project moved horizontally
                if (oldLeft !== undefined) {
                    const distance = oldLeft - newLeft;

                    project.style.transition = "none";
                    project.style.transform =
                        `translateX(${distance}px)`;

                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            project.style.transition =
                                `transform 0.45s ease ${index * 30}ms,
                                 opacity 0.3s ease`;

                            project.style.transform =
                                "translateX(0)";
                        });
                    });
                }

                // Fade visible project back in
                project.classList.remove("fade-out");
                project.style.opacity = "1";
            });

        }, 300);
    });
});