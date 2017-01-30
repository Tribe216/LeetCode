def computeArea(A, B, C, D, E, F, G, H):
    area_1 = (C - A) * (D - B)
    area_2 = (G - E) * (H - F)
    area_overlap = max(0, min(C, G) - max(A, E)) * max(0, min(D, H) - max(B, F))
    return (area_1 + area_2 - area_overlap)

print(computeArea(0,0,5,4,3,2,10,8))
