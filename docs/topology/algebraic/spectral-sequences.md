# Spectral Sequences

## Spectral Sequences of Double Complexes

::: definition
A __double complex__ is a bigraded vector space
$$
    C = \bigoplus_{p,q\in \ZZ} C^{p,q}
$$
with coboundary operators
$$
    d : C^{p,q} \ra C^{p,q+1},\qquad \delta : C^{p,q} \ra C^{p+1,q}
$$
satisfying
$$
    d^{2} = 0, \quad d \delta + \delta d = 0, \quad \delta^{2} = 0.
$$
The associated __total complex__ is defined by
$$
    C^{n} := \bigoplus_{p+q=n}C^{p,q}
$$
with coboundary $d + \delta : C^{n} \ra C^{n+1}$.
:::
Let
$$
    C_{k}^{n} := \bigoplus_{p + q = n, p \geq k} C^{p,q},
$$
so $C_{k}^{n}$ consits of all elements of $C^{n}$ which live to the right of a vertical line, if we imagine a square plot with the $(x,y)$-coordinates representing the $(p,q)$-values.

Let
$$
    Z_{k}^{n} := \{ z \in C_{k}^{n} : (d + \delta)z = 0 \},\qquad B^{n} := (d + \delta)C^{n-1}.
$$
The map
$$
    Z_{k}^{n} \lra Z_{k}^{n}/(B^{n} \cap Z_{k}^{n})
$$
gives a decreasing filtration
$$
    \ldots \supset H_{k-1}^{n} \supset H_{k}^{n} \supset H_{k+1}^{nn} \supset \ldots
$$
of the cohomology groups $H^{n}(C, d + \delta)$. We denote the successive quotients by $H^{k,n-k}$ and let
$$
    \gr H^{n} := \bigoplus_{k} H^{k,n-k},\qquad H^{k,n-k} := H_{k}^{n}/H_{k+1}^{n}.
$$
The spectral sequences that will now be described gives a method for computing these quotients starting from the cohomology groups of the "vertical components" $(C^{r,\ast},d)$. We will construct a sequence of complees $(E_{r},\delta_{r})$ such that each $E_{r+1}$ is the cohomology of the previous one, $E_{r+1} = H(E_{r},\delta_{r})$, and (under suitable hypotheses) the "limit" of these complexes are the quotients $H^{p,q}$.































