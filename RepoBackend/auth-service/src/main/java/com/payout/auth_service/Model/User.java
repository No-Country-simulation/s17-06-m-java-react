package com.payout.auth_service.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    @Column(name = "id_user")
    private Long idUser;

    @Column(name = "email", length = 100, nullable = false, unique = true)
    private String email;

    @Column(name = "password", length = 100, nullable = false)
    private String password;

    @Column(name = "phone", length = 20, nullable = false)
    private String phone;

    @Column(name = "status", length = 1, nullable = false)
    private Integer status;

    @Column(name = "created_at", nullable = false)
    private Long createdAt;

    @Column(name = "updated_at", nullable = true)
    private Long updatedAt;

    @Column(name = "last_login", nullable = true)
    private Long lastLogin;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private UserDetail userDetail;
}
