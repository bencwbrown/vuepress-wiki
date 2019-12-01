# Toric Geometry

## Toric Varieties

A _polyhedron_ in $\QQ^{d}$ is a subset $P$ defined by finitely many weak affine inequalities,
$$P = \{ x \in \mathbb{Q}^{d} : \sum_{j=1}^{d} a_{ij}x_{j} \geq b_{j},\, a_{ij}, b_{j} \in \mathbb{Q} \}.$$

## Quotients of affine toric varieties

Let $R$ be a finitely generated integral algebra over $\CC$, so that $\Spec(R) = X$ is an affine variety over $\CC$. An action of $G = \CC^{\ast}$ on $\Spec(R)$ is equivalent to a $\ZZ$-grading of $R$ over $\CC$, say $R = \oplus_{i \in \ZZ} R_{i}$. To study the GIT quotients $X // G$ linearised on the trivial bundle, choose any $n \in \ZZ$ and define a $\ZZ$-grading on $R[z]$ by $R_{i} \subset R[z]_{i}$, $z \in R[z]_{-n}$. As $X = \Spec(R) = \Proj(R[z])$, this $\ZZ$-grading is equivalent to a linearisation on the trivial bundle $\mc{O}$ of the $G$-action of $X$. The quotient is then $\Proj(R[z]^{G}) = \Proj(R[z]_{0}) = \Proj \oplus_{i\in \NN} R_{ni}z^{i}$.