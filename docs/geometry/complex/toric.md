# Toric Geometry

## Toric Varieties

A _polyhedron_ in $\QQ^{d}$ is a subset $P$ defined by finitely many weak affine inequalities,
$$P = \{ x \in \mathbb{Q}^{d} : \sum_{j=1}^{d} a_{ij}x_{j} \geq b_{j},\, a_{ij}, b_{j} \in \mathbb{Q} \}.$$

## Quotients of affine toric varieties

Let $R$ be a finitely generated integral algebra over $\CC$, so that $\Spec(R) = X$ is an affine variety over $\CC$. An action of $G = \CC^{\ast}$ on $\Spec(R)$ is equivalent to a $\ZZ$-grading of $R$ over $\CC$, say $R = \oplus_{i \in \ZZ} R_{i}$. To study the GIT quotients $X // G$ linearised on the trivial bundle, choose any $n \in \ZZ$ and define a $\ZZ$-grading on $R[z]$ by $R_{i} \subset R[z]_{i}$, $z \in R[z]_{-n}$. As $X = \Spec(R) = \Proj(R[z])$, this $\ZZ$-grading is equivalent to a linearisation on the trivial bundle $\mc{O}$ of the $G$-action of $X$. The quotient is then $\Proj(R[z]^{G}) = \Proj(R[z]_{0}) = \Proj \oplus_{i\in \NN} R_{ni}z^{i}$.

For $n = 0$, this is just the usual affine quotient $\Proj(R_{0}[z]) = \Spec(R_{0})$. For $n > 0$,
$$
    \Proj\oplus_{i \in \NN} R_{ni} = \Proj \oplus_{i \in \NN}R_{i},
$$
and similarly for $n < 0$,
$$
    \Proj\oplus_{i \in \NN} R_{ni} = \Proj \oplus_{i \in \NN}R_{-i}.
$$
So we only need to concern ourselves with the quotients when $n = 0, +1$, and $-1$, which we shall refer to as $X // 0$, $X // +$, and $X // -$, respectively. Observe that both $X // \pm$ are projective over $X // 0$.

::: tip Example
Let $R =\CC[x_{1},\ldots, x_{n};y]$ where the $x_{i}$'s each have degree 0, and $y$ has degree $1$, so that $\Proj(R) = \CC^{n}$. To lift the action of $G = \CC^{\ast}$ on $\CC^{n}$ to an action on $R$, we must choose a linearisation of the $G$-action on $\CC^{n}$. Such a linearisation must have the form
$$
    t \cdot x_{i} = t^{-\alpha_{i}}x_{i},\qquad \text{and} \qquad t \cdot y = t^{\lambda}y,
$$
for $\alpha_{i}, \lambda \in \ZZ$. 



The maximal compact subgroup $K = S^{1} \subset G$ then acts on $\CC^{n}$ with the corresponding moment map
$$
    \mu(z_{1},\ldots, x_{n}) = \frac{1}{2}\alpha_{1}|z_{1}|^{2} + \ldots + \frac{1}{2}\alpha_{n}|z_{n}|^{2} - \lambda.
$$
:::