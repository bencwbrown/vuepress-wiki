# Structures

## Representable Functors

Introduce the category of functors
$$
    \hat{\mcC} = Funct(\mcC^{\circ}, Set)
$$
and consider the functor $h_{X} : \mcC^{\circ} \rightarrow Set$ defined by $h_{X}(Y^{\circ}) := \Hom_{\mcC}(X,Y)$ as an object of $\hat{\mcC}$.

::: definition
A functor $F \in \Ob \hat{\mcC}$ is said to be __representable__ if it is isomorphic to a functor of the form $h_{X}$ for some $X \in \Ob \mcC$, and one says that the object $X$ __represents__ the functor $F$.
:::

