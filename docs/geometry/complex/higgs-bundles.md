# Higgs Bundles

## Hitchin's Equations

Let $X$ be a smooth compact Riemann surface, of genus $g \geq 2$. Higgs bundles originally came to be as solutions to __Hitchin's equations__, or "self-duality" equations on $X$. These are self-dual, dimensionally-reduced Yang-Mills equations written on a smooth Hermitian bundle of rank $r \geq 1$ and degree $0$ on $X$. Denote this bundle by $E$ and the metric by $h$, then the equations take the form
$$
    \begin{aligned}
        F(A) + \phi \wedge \phi^{\ast} = 0, \\
        \overline{\partial}_{A} \phi = 0.
    \end{aligned}
$$
Here, $A$ is a unitary connection on the bundle with respect to $h$, $F$ is its curvature, and $\phi$ is a smooth bundle map from $E$ to $E \otimes \w_{X}$, called a __Higgs field__. 

::: definition
Let $X$ be a smooth compact Riemann surface, with genus $g \geq 2$. Let $\mcE$ be a holomorphic bundle on $X$ which has a holomorphic section $\phi \in H^{0}(X, \End(\mcE) \otimes \w_{X})$. We refer to the pair $(\mcE,\phi)$ as a __Higgs bundle__, and we call the holomorphic section $\phi$ a __Higgs field__.
:::