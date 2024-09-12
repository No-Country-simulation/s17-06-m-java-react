package com.payout.auth_service.Model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.TrueFalseConverter;

import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@DynamicUpdate
@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    @Column(name = "id_user")
    private Long idUser;

    @Column(name = "email", length = 100, nullable = false, unique = true)
    private String email;

    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).+$", message = "La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número")
    @Column(name = "password", length = 100, nullable = false)
    private String password;

    @Column(name = "phone", length = 20, nullable = true)
    private Integer phone;

    @Column(name = "status", length = 1, nullable = true)
    private Integer status;

    @Column(name = "created_at", nullable = true)
    @CreationTimestamp(source = SourceType.DB)
    private Timestamp createdAt;

    @Column(name = "updated_at", nullable = true)
    @UpdateTimestamp(source = SourceType.DB)
    private Timestamp updatedAt;

    @Column(name = "last_login", nullable = true)
    @CreationTimestamp(source = SourceType.DB)
    private Timestamp lastLogin;

    @Column(name = "tfa", nullable = true)
    @Convert(converter = TrueFalseConverter.class)
    private Boolean tfa;

    @Column(name = "tfa_secret", nullable = true)
    private String tfaSecret;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private UserDetail userDetail;
}
