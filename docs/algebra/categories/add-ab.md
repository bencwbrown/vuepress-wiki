# Additive and Abelian Categories

## Axioms

The notion of an abelian category is used to axiomatise main properties of the following categories:
- Abelian groups;
- Modules over a ring;
- Presheaves of abelian groups;
- Sheaves of abelian groups.

Thus we put forward four axioms in order to define an abelian category $\mcC$.

### Axiom 1

::: remark Axiom 1
Any set $\Hom_{\mcC}(X,Y)$ is an abelian group (which we shall write using additive notation); the composition of morphisms is bi-additive.
:::

This is to say that $\Hom_{\mcC}$ is a functor $\mcC^{\circ} \times \mcC \rightarrow Ab$. This also implies that each set $\Hom_{\mcC}(X,Y)$ is non-empty, since every group contains the zero element.

### Axiom 2

::: remark Axiom 2
There exists a zero object $0 \in \Ob \mcC$, that is an object such that $\Hom_{\mcC}(0,0)$ is the zero group.
:::

This implies that $\Hom_{\mcC}(0,X)$ and $\Hom_{\mcC}(X,0)$ are also the zero groups for any $X \in \Ob \mcC$, and that any two zero objects are isomorphic.

### Axiom 3

::: remark Axiom 3
For any two objects $X_{1}, X_{2}$, there exists an object $Y$ and morphisms
$$
    (insert diagram)
$$
such that
$$
    p_{1}i_{1} = \id_{X_{1}},\quad p_{2}i_{2} = \id_{X_{2}},\quad i_{1}p_{1} + i_{2}p_{2} = \id_{Y},\quad p_{2}i_{1} = p_{1}i_{2} = 0.
$$
:::

This implies the existence of direct sums and direct products for any two $X_{1}, X_{2} \in \Ob \mcC$, and that they are equal to $Y$.

### Axiom 4

::: remark Axiom 4
For any morphism $\vp : X \rightarrow Y$ there exists a sequence
$$
    K \overset{k}{\longrightarrow} X \overset{i}{\longrightarrow} I \overset{j}{\longrightarrow} Y \overset{c}{\longrightarrow} K^{\prime}
$$
with the following properties:
- $j \circ i = \vp$;
- $K$ is the kernel of $\vp$, $K^{\prime}$ is the cokernel of $\vp$;
- $I$ is both the cokernel of $k$ and the kernel of $c$.
:::

The definitions for both the kernel and cokernel of a morphism shall be covered in the next section.

::: definition
Any such sequence is called a __canonical decomposition__.
:::

## Kernels and Cokernels

### Kernel

Let a category $\mcC$ satisfy axioms A1 and A2, and let $\vp : X \rightarrow Y$ be a morphism.