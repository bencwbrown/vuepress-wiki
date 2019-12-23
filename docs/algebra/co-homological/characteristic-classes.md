# Characteristic Classes

## Introduction

Let $E \ra X$ be a complex vector bundle. Choose a Hermitian structure on $E$ and let $M = \mcF(E)$ denote its bundle of unitary frames. So a point of $M$ consists of a pair $(x,\bold{e})$ where $x \in X$ and $\bold{e} = (e_{1},\ldots, e_{n})$ is an orthonormal basis of $E_{x}$. The group $G = \U(n)$ acts on the right, where
$$
    A \in G: \quad (x,\bold{e}) \mapsto (x,\bold{e}A).
$$
This makes $M$ into a principal $G$-bundle over $X$ and hence we get a map
$$
    \kappa : S(\mfg^{\ast})^{G} \lra H^{\ast}(X) = H_{G}^{\ast}(M).
$$
The elements of the images of this map gives a subring of the cohomology ring of $X$ called the __ring of characteristic classes__ of the vector bundle $E$. Its definition depended on the choice of Hermitian metric, but it can be shown that $\kappa$ does not depend on this choice, justifying the terminology "characteristic".

In the above, we could have taken $E$ to be a real vector bundle, $h$ a real scalar product, and $M$ to be the bundle of orthonormal frames. The group $G$ would then be the orthonormal group $\O(n)$. Similarly, we could have taken $E$ to be an oriented real frame bundle, $h$ a real scalar product, $M$ to be the bundle of oriented orthonormal frames, and $G = \SO(n)$ the special orthogonal group.

In all three cases, $\U(n), \O(n)$, and $\SO(n)$ we must examine the ring $S(\mfg^{\ast})^{G}$ whose structure we shall investigate below. In each case there are standard generators, whose images under $\kappa$ are called _Chern classes_ for the case of $\U(n)$, _Pontryagin classes_ for the case of $\O(n)$, and one class, called the _Pfaffian_, in addition to the Pontrygin classes in the case of $\SO(2n)$.

## The Invariants

### $G = \U(n)$

We can identify the Lie algebra of $\U(n)$ with the space of all matrices of the form $iA$, where $A$ is self-adjoint, and hence (using the trace pairing and forgetting the unneeded $i$) may identify $\mfg^{\ast}$ with the space of self-adjoint matrices with the coadjoint action being conjugation:
$$
    U : A \mapsto UAU^{-1},\qquad U \in \U(n).
$$
Define the polynomial $c_{i}$ of degree $i$ in $A$ to be the coefficient of $(-1)^{i}\lambda^{n-i}$ in the characteristic polynomial of $A$:
$$
    \det(\lambda - A) = \lambda^{n} - c_{1}(A)\lambda^{n-1} + \ldots + (-1)^{n}c_{n}(A).
$$
For instance, $c_{1}(A) = \tr(A)$ and $c_{n}(A) = \det(A)$. The polynomials $c_{i}(A)$ are clearly invariant under the adjoint representation, since the characteristic polynomial is. It is a theorem that they generate the ring on invariants.

::: definition
The characteristic classes corresponding to the $c_{i}$ for a complex vector bundle are called its __Chern classes__.
:::

### $G = \O(n)$

We may identify $\mfg$ and also $\mfg^{\ast}$ with the space of skew-adjoint matrices. For such a matric we have
$$
    \det(\lambda - A) = \det(\lambda - A^{T}) = \det(\lambda + A),
$$
so all the coefficient of $\lambda^{n-i}$ in the characteristic polynomial of $A$ vanish when $i$ is odd. We may write
$$
    \det(\lambda - A) = \lambda^{n} + p_{1}(A)\lambda^{n-2} + p_{2}(A)\lambda^{n-4} + \ldots.
$$
The polynomials $p_{i}$ of degree $p_{2i}$ generate the ring $S(\mfg^{\ast})^{G}$. The corresponding characteristic classes for a real vector bundle are called its __Pontryagin classes__.

### $G = \SO(2n)$

The Lie algebra $\mfg$ is the same for $\O(2n)$ so all the $p_{i}$ are invariant polynomials. There is one additional invariant which is not a polynomial in the $p_{i}$, called the __Pfaffian__. It is defined in the following way: To each $A \in \mfg$ and $v,w \in V = \RR^{2n}$, set
$$
    \w_{A}(v,w) := (Av,w),
$$
where $(-,-)$ denotes the scalar product. We have
$$
    \w_{A}(w,v) = (v,Aw) = -(Av,w) = -\w_{A}(v,w),
$$
so $\w_{A} \in \wedge^{2}(V^{\ast})$ is an alternating bilinear form and the map $A \mapsto \w_{A}$ is a linear isomorphism. The element
$$
    \frac{1}{n!} \w_{A}^{n}
$$
is an element of $\wedge^{2n}(V^{\ast})$ and the map $A \mapsto \tfrac{1}{n!}\w_{A}^{n}$ depends only on the scalar product and so it $\O(2n)$ invariant. However the group $\SO(2n)$ preserves a basis element, $\vol$, of $\wedge^{2n}(V^{\ast})$, where
$$
    \vol := e_{1}^{\ast} \wedge e_{2}^{\ast} \wedge \ldots \wedge e_{2n}^{\ast}.
$$
Here $e_{1},\ldots, e_{2n}$ is any oriented orthonormgal basis and $e_{1}^{\ast}, \ldots, e_{2n}^{\ast}$ is the dual basis. We may then define $\Pfaff(A)$ by
$$
    \frac{1}{n!}\w_{A}^{n} =: \Pfaff(A)\cdot \vol.
$$
It is a polynomial function of $A$ of degree $n$ which is $\SO(2n)$ invariant. For any $A$ we can find an oriented orthonormal basis relative to which the matrix $A$ takes the form
$$
    \begin{bmatrix}
        \begin{pmatrix}
            0 & \lambda_{1} \\
            -\lambda_{1} & 0
        \end{pmatrix}
        & 0 & \ldots & 0 \\
        0 & \begin{pmatrix}
            0 & \lambda_{2} \\
            -\lambda_{2} & 0
        \end{pmatrix}
        & \ldots & 0 \\
        \vdots & \vdots & \ddots & \vdots \\
        0 & 0 & \ldots &
         \begin{pmatrix}
            0 & \lambda_{n} \\
            -\lambda_{n} & 0
        \end{pmatrix}
    \end{bmatrix}.
$$
Relative to this orthonormal basis we have 
$$
    \w_{A} = \lambda_{1} e_{1}^{\ast} \wedge e_{2}^{\ast} + \ldots + \lambda e_{2n-1}^{\ast} \wedge e_{2n}^{\ast}
$$
so
$$
    \frac{1}{n!}\w_{A}^{n} = \lambda_{1} \cdot \ldots \cdot \lambda_{n}\cdot \vol
$$
and hence 
$$
    \Pfaff(A) = \lambda_{1} \cdot \ldots \cdot \lambda_{n}.
$$
On the other hand,
$$
    \det(A) = \lambda_{1}^{2} \cdot \ldots \cdot \lambda_{n}^{2},
$$
so we have the general formula
$$
    \Pfaff^{2} = \det.
$$
So the square of $(2\pi)^{-n}\Pfaff$ is equal to $p_{n}$. Also note that in odd dimensions, the determinant of any antisymmetric matrix vanishes, so this phenomenon does not occur.

The characteristic class corresponding to the Pfaffian for a real, $2n$-dimensional, oriented vector bundle $E$ is called the __Euler class__ of the vector bundle, and is denoted by
$$
    e(E) \in H^{2n}(X).
$$